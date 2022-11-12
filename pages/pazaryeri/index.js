import Head from 'next/head'

export default function Pazaryeri({tapular}) {

  return (
    <div className="max-w-lg mt-36 mx-auto text-center px-4">
      <Head>
      <title>Satilik Tapu - E-Devlet</title>
        <meta name="description" content="Interact with a simple smart contract from the client-side." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export async function getServerSideProps(context) {
    // jwt verify   
    const jwt = await context.req.cookies.jwt
    if(jwt){
        await axios.post('http://localhost:8000/verify', {
            token: jwt,
        }).then(async(jwtResponse) => {
            if(!jwtResponse.data.status_code){
                return {
                    redirect: {
                        destination: '/',
                        permanent: false,
                    },
                }
            }
            else if(jwtResponse.data.status_code == 200){
                let data =[] 
                await 
                    axios.get('http://localhost:8000/tapular').then((tapuResponse) => {
                    for(let i=0; i<tapuResponse.data.length; i++){
                        if(tapuResponse.data[i].publicAddress === 
                            jwtResponse.data.publicAddress){
                            data.push(tapuResponse.data[i])
                        }
                    }
                })
                return {
                    props: {
                        tapular: data,
            }
        }}}).catch((err) => {
            console.log(err)
        })
    }
    else{
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
}