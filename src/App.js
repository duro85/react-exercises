import Expenses from "./components/Expenses";

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet paper',
            amount: 450,
            date: new Date(2021, 3, 17)
        },
        {
            id: 'e2',
            title: 'Toilet paper 2',
            amount: 350,
            date: new Date(2021, 3, 19)
        },
        {
            id: 'e3',
            title: 'Toilet paper 3',
            amount: 150,
            date: new Date(2021, 3, 22)
        },
        {
            id: 'e4',
            title: 'Toilet paper 4',
            amount: 450,
            date: new Date(2021, 3, 25)
        },
    ]
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
