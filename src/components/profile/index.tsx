import Ledger from "~/components/profile/Profile";
import Payment from "~/components/profile/Payment";
import Address from "~/components/profile/Address";
import Order from "~/components/profile/Order";
const Content = ({ tab }: any) => {
        switch (tab) {
                case "1":
                        return <Ledger />
                case "2":
                        return <Payment />
                case "3":
                        return <Address />
                case "4":
                        return <Address />
                case "5":
                        return <Order />
                default:
                        return <Ledger />
        }
}
export default Content