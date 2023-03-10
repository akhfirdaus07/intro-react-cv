import { Heading } from "@chakra-ui/react";

function Capabilities(){
    return(
        <div className="capabilities white">
            <div className="top">
                <Heading as="h1" size="4xl">
                    CAPABILITIES
                </Heading>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus enim aliquid. Laboriosam mollitia temporibus nobis perspiciatis unde, totam libero inventore aliquid cumque at distinctio reiciendis porro, facere ex iure?
                Ratione a eius quasi soluta facere modi pariatur mollitia cupiditate quos placeat obcaecati et nulla voluptatum recusandae architecto maxime maiores, ad quae dolor fugit. Eveniet ullam minus inventore molestias in.</p>
            </div>
            <div className="bottom">
                <div className="card">
                    <h2>BRAND STRATEGY</h2>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div className="card">
                    <h2>BRAND IDENTITY</h2>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div className="card">
                    <h2>COMMUNICATION STRATEGY</h2>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Capabilities;