<template>
	<div class="flex min-h-full flex-1 h-screen">
		<div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
			<div class="mx-auto w-full max-w-sm lg:w-96">
				<div>
					<Favicon class="h-14 w-auto" />
					<h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
					<p class="mt-2 text-sm leading-6 text-gray-500">
						Not a member?
						{{ ' ' }}
						<a href="#" class="font-semibold text-primary hover:text-primary-300">Sign up</a>
					</p>
				</div>

				<div class="mt-10">
					<div>
						<form @submit.prevent="handleSubmit" class="space-y-6">
							<div>
								<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
								<div class="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autocomplete="email"
										required="true"
										class="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-lightaccent focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
								<div class="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										autocomplete="current-password"
										required="true"
										class="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-lightaccent focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div class="flex items-center justify-between">
								<div class="flex items-center">
									<input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-primary text-primary focus:ring-primary" />
									<label for="remember-me" class="ml-3 block text-sm leading-6 text-primary">Remember me</label>
								</div>

								<div class="text-sm leading-6">
									<a href="#" class="font-semibold text-primary hover:text-primary-300">Forgot password?</a>
								</div>
							</div>

							<div>
								<button
									type="submit"
									class="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Sign in
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="relative hidden w-0 flex-1 lg:block">
			<img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" />
		</div>
	</div>
</template>

<script setup>
import axios from 'axios';

console.log('envURL' + process.env);
const frontendUrl = process.env.FRONTEND_URL ? `https://${process.env.FRONTEND_URL}` : 'http://localhost:3000';
console.log('frontendURL' + frontendUrl);
const handleSubmit = async (event) => {
	event.preventDefault();

	const formData = new FormData(event.target);

	const userData = {
		email: formData.get('email'),
		password: formData.get('password')
	};

	try {
		const response = await axios.post('https://campusprob-43ea2325dc3f.herokuapp.com/api/login', userData);

		const { token } = response.data;

		if (response.status === 200) {
			window.location.href = `${frontendUrl}/`;
			localStorage.setItem('token', token);
		} else if (response.status === 401) {
			alert('Correo o contraseña incorrectos.');
		}
	} catch (error) {
		alert(`Error en la solicitud: (${error})`);
	}
};

definePageMeta({ layout: 'blank' });
</script>
