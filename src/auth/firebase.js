import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZ79-EUMDFpgeHhVBxSpAQBx1L_skdRaw",
    authDomain: "tienda-a9b7c.firebaseapp.com",
    projectId: "tienda-a9b7c",
    storageBucket: "tienda-a9b7c.appspot.com",
    messagingSenderId: "397140799527",
    appId: "1:397140799527:web:0d8721231f47e8e5585e02",
};

const app = initializeApp(firebaseConfig);

//////////////////////////////////////////////////////////////////////
///////////////// AUTENTICACIÓN DE USUARIOS FIREBASE//////////////////////////
//////////////////////////////////////////////////////////////////////

export const auth = getAuth(app);
export const db = getFirestore(app);

export function crearUsuario(email, password){
    return(
        new Promise((res, rej) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                console.log("Credenciales", userCredential)
                const user = userCredential.user;
                console.log(user)
                res(user)
                // ...
            })
            .catch((error) => {
                console.log(error.code, error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error)
                // ..
            });
        })
    )
}

auth.useDeviceLanguage()
export function logearG(){
    return(
        new Promise((res, rej) => {
            signInWithPopup(auth, provider)
            .then((result) => {
                console.log("test", result)
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log("credenciales G", credential)
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("User", user)
                res(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                console.log("test error", error )
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                rej()
                // ...
            });   
        })
    )

}

export function loginEmailPass(email, password){
    return(
        new Promise((res, rej) => {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log("Credenciales", userCredential)
                const user = userCredential.user;
                console.log(user)
                res(user)
            })
            .catch((error) => {
                console.log(error.code)
                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error)
            });
        })
    )
}

// Login que obtiene el rol desde Firestore
export async function loginConRol(email, password) {
    // Login normal
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Leer rol de Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.data();
    return {
        uid: user.uid,
        email: user.email,
        role: userData?.role || "cliente"
    };
}

/////////////////////////////////////////////////////////////////
///////////////////// BASE DE DATOS FIRESTORE  //////// ////////
////////////////////////////////////////////////////////////////

/* 
export function crearProducto(producto) {
    return new Promise(async (res, rej) => {
        try {
        const docRef = await addDoc(collection(db, "productos"), {
            name: producto.name,
            imagen: producto.imagen,
            price: producto.price,
            description: producto.description
        });

        console.log("Document written with ID: ", docRef.id);
        res(docRef)

        } catch (e) {
        console.error("Error adding document: ", e);
        rej(e)
        }
    });
}

export function editarProductoFirebase(producto){
    return(
        new Promise(async (res, rej) => {
            try{
                await setDoc(doc(db, "productos", producto.id), {
                    name: producto.name,
                    imagen: producto.imagen,
                    price: producto.price,
                    description: producto.description
                })
                console.log("Document written ");
                res()
            }catch (e){
                console.error("Error adding document: ", e);
                rej(e)
            }
        })
    )
}

export function eliminarProductoF(id){
    return(
        new Promise(async(res, rej) => {
            try{
                await deleteDoc(doc(db, "productos", id))
                res()
            }catch (e){
                console.error("Error adding document: ", e);
                rej(e)
            }

        })
    )
}

export function obtenerProductosF() {
    return(
        new Promise(async (res, rej) => {
                try {
                    const querySnapshot = await getDocs(collection(db, "productos"));
                    console.log(querySnapshot, "respuesta al getDocs")
                    
                    const resultados = querySnapshot.docs.map(doc => {
                        console.log(doc, "documento sin ejecutar metodo .data()")
                        const data = doc.data();
                        console.log(data, "doc con data extraida")
                        return {
                            id: doc.id,
                            name: data.name,
                            imagen: data.imagen,
                            price: data.price,
                            description: data.description
                        };
                    });

                    res (resultados);
                } catch (error) {
                    console.error("Error al obtener los usuarios:", error);
                    rej (error);
                }
        })
    )
}

export function obtenerProductoEnFirebase(id) {
    return(
        new Promise(async (res, rej) => {
                try {
                    const docRef = doc(db, "productos", id);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                        const data = docSnap.data();
                        const producto = {
                            id: docSnap.id,
                            name: data.name,
                            imagen: data.imagen,
                            price: data.price,
                            description: data.description
                        }
                        console.log(producto)
                        res(producto)
                    } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                        rej("No such document!")
                    }
                } catch (error) {
                    console.error("Error al obtener los usuarios:", error);
                    rej (error);
                }
        })
    )
}

 */