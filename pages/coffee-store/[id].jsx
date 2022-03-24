import {useRouter} from 'next/router'
import Link from "next/link";

const CoffeeStore = () => {
    const router = useRouter();
    console.log("router", router)
    return (
      <div>
        <div>this is coffee store {router.query.id}</div>
        <Link href="/">

         Back to home 
        </Link>
      </div>
    );
}
export default CoffeeStore;