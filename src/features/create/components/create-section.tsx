import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Database } from '@/libs/supabase/types';

type Products = Database['public']['Tables']['products']['Row'];

interface CreateSectionProps {
  product: Products;
}

const CreateSection = ({ product }: CreateSectionProps) => {
  const { metadata } = product;
  // Your code here
  return (
    <section className='relative flex h-screen max-w-full rounded-lg bg-slate-50 px-16 py-8'>
      <div className='w-2/3 pr-5'>
        <h4 className='text-lg font-semibold'>AI Tattoo Designer</h4>
        <Input placeholder='Type your idea' className='mt-3 h-12' />
        <div className='mt-3'>
          <Button className='w-full'>Create {metadata?.generated_images}</Button>
        </div>
      </div>
      <div className='w-full bg-slate-100'>Output Create</div>
    </section>
  );
};

export default CreateSection;
