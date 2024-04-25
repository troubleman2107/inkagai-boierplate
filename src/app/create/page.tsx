import { getSession } from '@/features/account/controllers/get-session';
import CreateSection from '@/features/create/components/create-section';

export default async function CreatePage() {
  const session = await getSession();
  console.log('🚀 ~ CreatePage ~ session:', session);
  return <CreateSection session={session} />;
}
