import React, { useState } from 'react';
import EditCrypto from "../components/dashboard/edit/EditCrypto";

const EditItemPage = () => {
    const [pageName, setPageName] = useState("editCrypto")

    switch (pageName) {
        case "editCrypto": {
            return <EditCrypto />
        }
    }
};

export default EditItemPage;