import Head from 'next/head'
import React from 'react';

export default class extends React.Component {

    static async getInitialProps({ req, res }) {
        console.log(req)
        console.log(res)
        // return to props
        return { }
    }

    render(){
        return (
            <div>
                <Head>
                    <title>ADMIN TESTE</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                </Head>

                <p>
                    TESTE
                </p>
            </div>
        );
    }
}
