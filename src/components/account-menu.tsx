'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoPersonCircleOutline } from 'react-icons/io5';

import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUserInfo } from '@/libs/stores';
import { Database } from '@/libs/supabase/types';
import { ActionResponse } from '@/types/action-response';

import { useToast } from './ui/use-toast';

type User = Database['public']['Tables']['users']['Row'];

export function AccountMenu({ signOut, user }: { signOut: () => Promise<ActionResponse>; user: User | null }) {
  const router = useRouter();
  const { toast } = useToast();
  const { userInfo, setUser } = useUserInfo();

  useEffect(() => {
    if (user) setUser(user);
  }, [user, setUser]);

  console.log('🚀 ~ AccountMenu ~ userInfo:', userInfo);

  async function handleLogoutClick() {
    const response = await signOut();

    if (response?.error) {
      toast({
        variant: 'destructive',
        description: 'An error occurred while logging out. Please try again or contact support.',
      });
    } else {
      router.refresh();

      toast({
        description: 'You have been logged out.',
      });
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='rounded-full'>
        <IoPersonCircleOutline size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='me-4'>
        <DropdownMenuItem asChild>
          <Link href='/account'>Account ({userInfo?.credit})</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogoutClick}>Log Out</DropdownMenuItem>
        <DropdownMenuArrow className='me-4 fill-white' />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
