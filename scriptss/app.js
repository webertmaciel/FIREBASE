
const firebaseConfig = {
    apiKey: "AIzaSyDuykT_N4soN5wOs6lFuV8swDsOsi6Q3OA",
    authDomain: "colegio-6da35.firebaseapp.com",
    projectId: "colegio-6da35",
    storageBucket: "colegio-6da35.appspot.com",
    messagingSenderId: "705739704649",
    appId: "1:705739704649:web:d746aae3a8dd5aa784b298",
    measurementId: "${config.measurementId}"
};
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

const TURMA = "turmaA";

//  ex de como adicionar elementos no banco

/*db.collection(TURMA).add({
    novo: "marcos",
    sobrenome: "santos",
    notas: { nota1: 9.6, nota2: 7.5 },
}).then((doc) => {
    console.log("documento inserido com sucesso", doc);
}).catch(err => {
    console.log(err);
})*/

// adicionar ou auterar elementos ultilaza-se set  

/*db.collection(TURMA).doc("AlunoNovo").set({
    novo: "joao",
    sobrenome: "bezerra",
    notas: { nota1: 9.6, nota2: 7.5 },
}).then((doc) => {
    console.log("documento inserido com sucesso");
}).catch(err => {
    console.log(err);
})*/


// atualizar a base de dados dos campos respectivos existentes

// db.collection(TURMA).doc("AlunoNovo").update({
//     novo: "webert",
//     sobrenome: "maciel",
//     notas: { nota1: 9.6, nota2: 7.5 },
//     faltas: 5
// }).then((doc) => {
//     console.log("documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// })


// apagar campo do documento


// db.collection(TURMA).doc("AlunoNovo").update({

//     cidades: firebase.firestore.FieldValue.delete()


// }).then(() => {
//     console.log("documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// })
























// ex de como consultar documento no firebase

// db.collection("turmaA").get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome);
//     })
// })

// db.collection("turmaA").where("nome", "==", "jose").get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome, aluno.sobrenome);
//     })
// })





















let auth = firebase.auth()


// como criar um usuario e e-mail por firestor usando codigo

// let newUserEmail = "novoteste@teste.com"
// let newUserPassword = "123abc"

// let auth = firebase.auth()

// auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user => {
//     console.log(user)
// }).catch(err => {
//     console.log(err)
// })

// fazer login com codigo no firebase


// function login() {
//     let userEmail = "esteteste@teste.com";
//     let userPassword = "123abc"

//     auth.signInWithEmailAndPassword(userEmail, userPassword).then(loggedUser => {
//         console.log(loggedUser)
//     }).catch(err => {
//         console.log(err)
//     })

//     // let user = auth.currentUser;
//     // console.log(user);


// }
// login()



let user = auth.currentUser;
console.log(user);
auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user)
    } else {
        console.log("ninquem logado")
    }
});


function logout() {
    auth.signOut().then(obj => {
        console.log(obj)
    }).catch(error => {
        console.log(error)
    })
}
setTimeout(logout, 2000)


