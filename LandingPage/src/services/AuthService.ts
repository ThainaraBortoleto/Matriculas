import router from "../router"
export default function auth(events: SubmitEvent) {
    const formData = new FormData(events.target as HTMLFormElement);
    console.log({...formData});
    alert('aqui')
    if (true){
        router.push('/home')
    } else {
        router.push('/login')
    }
}
