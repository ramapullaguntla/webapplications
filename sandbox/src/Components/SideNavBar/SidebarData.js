import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc"

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        classname: "nav-text",
        icon: <AiIcons.AiFillHome/>

    },
    {
        title: "Reports",
        path: "/reports",
        classname: "nav-text",
        icon: <IoIcons.IoIosPaper/>

    },
    {
        title: "Products",
        path: "/products",
        classname: "nav-text",
        icon: <FaIcons.FaCartPlus/>

    },
    {
        title: "Team",
        path: "/teams",
        classname: "nav-text",
        icon: <FaIcons.FaTeamspeak/>

    },
    {
        title: "Contacts",
        path: "/contacts",
        classname: "nav-text",
        icon: <AiIcons.AiFillContacts/>

    },
    {
        title: "WebServices",
        path: "/webservices",
        classname: "nav-text",
        icon: <FcIcons.FcServices/>
    }

];

export const WebServiceData = [
    {
        "Name": "ArchiveProject",
        "ServiceDetails": [
            {
                "Name": "ArchiveService",
                "OperationDetails": [
                    {
                        "Name": "UpdateDoc"
                    }
                ]
            }
        ]
    },
    {
        "Name": "owinprojectd",
        "ServiceDetails": [
            {
                "Name": "owinservice",
                "OperationDetails": [
                    {
                        "Name": "createUform"
                    },
                    {
                        "Name": "createEforms"
                    },
                    {
                        "Name": "createcheck"
                    },
                    {
                        "Name": "createInvoice"
                    },
                    {
                        "Name": "deleteNestedTables"
                    },
                    {
                        "Name": "deleteInvoice"
                    },
                    {
                        "Name": "runQuery"
                    },
                    {
                        "Name": "executeInvoiceFilter"
                    },
                    {
                        "Name": "executeScript"
                    },
                    {
                        "Name": "executeAdhocTask"
                    },
                    {
                        "Name": "getbytes"
                    },
                    {
                        "Name": "readNestedTables"
                    },
                    {
                        "Name": "readInvoice"
                    },
                    {
                        "Name": "updateNestedTables"
                    },
                    {
                        "Name": "updateAutofill"
                    },
                    {
                        "Name": "updatecheck"
                    },
                    {
                        "Name": "updateInvoice"
                    }
                ]
            }
        ]
    },
    {
        "Name": "SystemEvent",
        "ServiceDetails": [
            {
                "Name": "systemservice",
                "OperationDetails": [
                    {
                        "Name": "receiveNonXml"
                    },
                    {
                        "Name": "payload"
                    },
                    {
                        "Name": "submit"
                    },
                    {
                        "Name": "submitToLifecycle"
                    }
                ]
            }
        ]
    }
];
