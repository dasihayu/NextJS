import Link from "next/link";

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <button>Register</button>
      Sudah punya akun ?<Link href={"/auth/login"}>Login</Link>
    </div>
  );
}
