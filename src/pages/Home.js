
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Home() {

const {user} = useAuthContext();
const {Documents:Books}=useCollection('books',["uid","==",user.uid]);

/*const [Books, setBooks] = useState(null)

useEffect(() => {
    const ref = collection(db,'books')
    getDocs(ref)
    .then((snap)=>{
        let result = [];
        snap.forEach(doc=>{
            result.push({id:doc.id,...doc.data()})
        })
        setBooks(result)
    })
}, [])
*/
    return (
    <div className='App'>
        {Books && <BookList books={Books}/>}
        <BookForm/>
    </div>
    );
}
