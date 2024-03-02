import axios from "axios";
export default function create(name, pass) {
    console.log('aqui', name, pass);

    axios.get('http://127.0.0.1:8000/lista').then((response) => {
        console.log('bateu la', response);
    }).catch((error) => {
        console.log('deu erro')
    })

    // if (true){
    //     router.push('/home')
    // } else {
    //     router.push('/login')
    // }
}
