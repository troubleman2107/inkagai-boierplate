'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { useUserInfo } from '@/libs/stores';
import { Database } from '@/libs/supabase/types';
// import { getUser } from '@/features/account/controllers/get-user';
type User = Database['public']['Tables']['users']['Row'];

const CreateSection = ({ user }: { user: User | null }) => {
  const { toast } = useToast();
  const { setUser } = useUserInfo();

  useEffect(() => {
    if (user) setUser(user);
  }, [user, setUser]);

  function generateImages() {
    if (!user) {
      toast({
        variant: 'default',
        description: 'You must be logged in to generate images.',
        action: (
          <Link href='/login' prefetch={true}>
            <ToastAction altText='Go to login'>Login</ToastAction>
          </Link>
        ),
      });

      return;
    }
  }

  // Your code here
  return (
    <section className='relative h-screen max-w-full rounded-lg px-20 py-8'>
      <div className='flex'>
        <Input
          placeholder='Type your idea'
          className='h-12 rounded-none rounded-l-lg focus-visible:border-dashed focus-visible:ring-0'
        />
        <Button variant='default' className='h-12 rounded-none rounded-r-lg' onClick={() => generateImages()}>
          Generate
        </Button>
      </div>
      {/* <ExamplesSection /> */}
    </section>
  );
};

export default CreateSection;
