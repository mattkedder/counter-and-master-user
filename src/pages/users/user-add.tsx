import { useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import axios from 'axios';
import { environment } from '../../environment';

const UsersPage = () => {
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const toast: any = useRef(null);

	// ==============================
	// ADD USER
	// ==============================
	function insertUser(event: any) {
		event.preventDefault();
		setLoading(true);

		var body = {
			name: event.target.name.value,
			email: event.target.email.value,
			position: event.target.position.value
		}
		axios.post(environment.base_api_url, body).then(result => {
			var toastData = {
				type: 'success',
				title: 'Success',
				message: 'Add user successfully'
			}
			toastLoad(toastData);
			event.target.reset();
			setLoading(false)
		}).catch(error => {
			var toastData = {
				type: 'error',
				title: 'Error',
				message: 'Add user failed'
			}
			toastLoad(toastData);
			setLoading(false)
		})
	}

	// ==============================
	// LOAD TOAST
	// ==============================
	function toastLoad(toastData: any) {
		toast.current.show({ severity: toastData.type, summary: toastData.title, detail: toastData.message, life: 3000 });
	}

	return (
		<div className="section">
            <div className="container">
				<Toast ref={toast} />

				<form onSubmit={(event) => insertUser(event)}>
					<div className="card">
						<div className="card-header">
							<h4 className="mb-0">Add User</h4>
						</div>
						<div className="card-body">
							<div className="form-group">
								<label>Name</label>
								<InputText type="text" id="name" name="name" disabled={loading} className="form-control" required />
							</div>
							<div className="form-group">
								<label>Email</label>
								<InputText type="email" id="email" name="email" disabled={loading} className="form-control" required />
							</div>
							<div className="form-group mb-0">
								<label>Position</label>
								<InputText type="text" id="position" name="position" disabled={loading} className="form-control" required />
							</div>
						</div>
						<div className="card-footer">
							<div className="d-flex">
								<div className="flex-fill">
									<Button onClick={() => history.goBack()} className="p-button-secondary" label="Back" icon="pi pi-arrow-left"/>
								</div>
								<div className="pl-2">
									<Button type="submit" label="Save" icon="pi pi-save" loading={loading}/>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default UsersPage
