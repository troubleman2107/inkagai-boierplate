import { getUser } from '@/features/account/controllers/get-user';
import CreateSection from '@/features/create/components/create-section';
import { useUserInfo } from '@/libs/stores';

export default async function CreatePage() {
  const user = await getUser();

  return <CreateSection user={user} />;
}
