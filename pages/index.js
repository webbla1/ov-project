import React from 'react';
import Head from 'next/head';
import UserForm from '../components/UserForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meal Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Meal Planner</h1>
        <UserForm />
      </main>

      <footer>
        <p>© 2023 Meal Planner</p>
      </footer>
    </div>
  );
}
