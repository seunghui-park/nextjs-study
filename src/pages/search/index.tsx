import { useRouter } from "next/router"

export default function Page(){
    const router = useRouter(); //router 변수에 라우터 객체 저장
    console.log(router)
    return <h1>Search</h1>
}