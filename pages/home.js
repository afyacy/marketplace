import React from "react";
import Link from "next/link";
import {signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
    const [session, loading, ] = useSession();
    return (
        <>
        {
            !session && (
                <>
                    Not signed in <br />
                    <button onClick={signIn}>Sign In</button>
                </> 
        )}

        {
            session && ( 
                <>
                    Signed in as {session.user.email} <br />
                    <div>You can now access our super secret pages</div>
                    <button>
                        <Link href="/dashboard">To the Dashboard</Link>
                    </button>
                    <button onClick={signOut}>Sign Out</button>
                </>
            )
        }
        </>
    )
}