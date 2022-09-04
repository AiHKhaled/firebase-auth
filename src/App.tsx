import { useEffect, useState } from 'react'
import {
  addDoc,
  setDoc,
  collection,
  CollectionReference,
  getDocs,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { db } from './config/firebaseConfig'

type dataProps = {
  id: string
  name: string
  age: number
  purpose: string
}

function App() {
  const [newName, setNewName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [purpose, setPurpose] = useState<string>('')
  const [users, setUsers] = useState<any>()
  const usersCollectionRef = collection(
    db,
    'users'
  ) as CollectionReference<dataProps>

  const makeNewUser = async (e: any) => {
    e.preventDefault()
    try {
      await addDoc(usersCollectionRef as any, {
        name: newName,
        age: age,
        purpose: purpose,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef)
    const nextData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setUsers(nextData)
  }

  const updateUser = async (id: string) => {
    const taskDocRef = doc(db, 'users', id)
    try {
      await updateDoc(taskDocRef, {
        newName: newName,
        age: age,
        purpose: purpose,
      })
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className="App">
      <form action="" onSubmit={makeNewUser}>
        <div className="newUser">
          <input
            type="text"
            placeholder="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="number"
            placeholder="age"
            value={age}
            onChange={(e: any) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
          <button>submit</button>
        </div>
      </form>
      {users?.map((user: dataProps) => {
        return (
          <div key={user.id}>
            {user.name}
            <form onClick={() => updateUser(user.id)}>
              {' '}
              <input type="text" />
              <button> submit</button>
            </form>
          </div>
        )
      })}
    </div>
  )
}

export default App
