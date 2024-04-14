import { redirect } from 'next/navigation';

import { getSession } from '@/features/account/controllers/get-session';
import { getSubscription } from '@/features/account/controllers/get-subscription';
import CreateSection from '@/features/create/components/create-section';

export default async function CreatePage() {
  const session = await getSession();
  const subscription = await getSubscription();
  console.log('🚀 ~ CreatePage ~ subscription:', subscription);

  if (!session) {
    redirect('/login');
  }

  if (!subscription?.prices?.products) {
    // Replace this with your own error or placeholder component
    return <div>No subscription found</div>;
  }

  return <CreateSection product={subscription.prices?.products} />;
}
