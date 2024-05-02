import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const {transactions} = useContext(TransactionContext)
  console.log(transactions)
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            {transactions.map(transactions => {
              return (
                <tr key={transactions.id}>
                  <td width="50%">{transactions.description}</td>
                  <td>
                    <PriceHighlight variant={transactions.type}>
                      {transactions.type === 'outcome' && '- '}
                      {priceFormatter.format(transactions.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transactions.category}</td>
                  <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
                </tr> 
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
