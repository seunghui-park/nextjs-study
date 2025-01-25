import { useRouter } from "next/router"

export default function Page(){
    const router = useRouter(); //router 변수에 라우터 객체 저장
    console.log(router);

    //쿼리 스트링 값 불러오기
    const {q} = router.query; // const q =router.query.q;랑 같음.
    return <h1>Search</h1>
}