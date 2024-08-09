import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const handlerLogin = () => {
    router.push("/product");
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handlerLogin}>Submit</button>
      Belom punya akun ?<Link href={"/auth/register"}>Buat akun</Link>
    </div>
  );
}
