import { ReactNode, createContext, useEffect, useState } from "react";

interface Transactions {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string
}
interface TransactionsContextType {
    transactions: Transactions[]
}
interface TransactionProviderProps {
    children: ReactNode
}
export const TransactionContext = createContext({} as TransactionsContextType)
export function TransactionsProvider({children}: TransactionProviderProps ){
    const [transactions, setTransactions] = useState<Transactions[]>([])
    async function loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()
  
      setTransactions(data)
    }
    useEffect(() => {
      loadTransactions() 
    }, [])
    return (
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}