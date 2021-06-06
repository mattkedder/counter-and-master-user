import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import axios from 'axios';
import { environment } from '../../environment';

const UsersPage = () => {
    
    interface User {
        id: number;
        name: string;
        email: string;
        position: string;
        createdAt: Date;
        avatar: string;
    }

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const history = useHistory();

    // ==============================
    // SET TEMPLATE FOR PAGINATION
    // ==============================
    const template: any = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        'PrevPageLink': (options: any) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-p-3">Previous</span>
                    <Ripple />
                </button>
            )
        },
        'NextPageLink': (options: any) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-p-3">Next</span>
                    <Ripple />
                </button>
            )
        },
        'PageLinks': (options: any) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });
                return <span className={className} style={{ userSelect: 'none' }}>...</span>;
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            )
        },
        'RowsPerPageDropdown': false
    };

    useEffect(() => {
        const fetchData = () => {
            axios.get(environment.base_api_url).then(result => {
                setUsers(result.data);
                setLoading(false)
            }).catch(error => {
                setLoading(false)
            })
        };
        fetchData();
    }, [])

    // ==============================
    // PAGE CONFIG
    // ==============================
    function pageConfig(event: any) {
        setFirst(event.first);
        setRows(event.rows);
    }

    return (
        <div className="section">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex">
                            <div className="flex-fill">
                                <h4 className="mb-0">Users Data</h4>
                            </div>
                            <div className="pl-1">
                                <Button label="New" onClick={() => history.push('/users/add')} icon="pi pi-plus" />
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <DataTable
                            className="p-datatable-gridlines datatable"
                            value={users}
                            paginator
                            paginatorTemplate={template}
                            first={first}
                            rows={rows}
                            loading={loading}
                            onPage={(event) => pageConfig(event)}>
                            <Column field="name" header="Name"></Column>
                            <Column field="email" header="Email"></Column>
                            <Column field="position" header="Position"></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersPage
