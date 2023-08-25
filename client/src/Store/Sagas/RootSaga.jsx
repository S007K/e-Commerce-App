import { all } from "redux-saga/effects"

import { maincategorySaga } from "./MaincategorySaga"
import { subcategorySaga } from "./SubcategorySaga"
import { brandSaga } from "./BrandSaga"
import { productSaga } from "./ProductSaga"
import { userSaga } from "./UserSaga"
import { cartSaga } from "./CartSaga"
import { wishlistSaga } from "./WishlistSaga"
import { checkoutSaga } from "./CheckoutSaga"
import { contactSaga } from "./ContactSaga"
import { newslatterSaga } from "./NewslatterSaga"

export default function* RootSaga() {
    yield all(
        [
            maincategorySaga(),
            subcategorySaga(),
            brandSaga(),
            productSaga(),
            userSaga(),
            cartSaga(),
            wishlistSaga(),
            checkoutSaga(),
            contactSaga(),
            newslatterSaga(),
        ]
    )
}