import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './cards.css'
import MuiDialog from "./MuiDialog";

const titles = ["Frontend", "Backend", "CI/CD", "Professional Experience"]
const texts = [
    "The frontend is comprised of a React app primarily using Bootstrap and Material UI",
    "The backend is an async Actix Web (rust) server which runs a REST and GraphQL API",
    "CI/CD as well as version control is handled by GitHub and GitHub workflows",
    "The technologies Alexander has deployed in production"
]
const dialogTitle = ["React and Web Frameworks", "Actix, REST and GraphQL", "CI/CD + GitHub Workflows", "Professional Experience"]
const dialogText = [
    "I has previous experience in front end development from personal projects. This frontend is made with React as " +
    "the foundation, and additional components mostly from Bootstrap and Material UI. The site is run on kubernetes and " +
    "exposed through an ingress and a service. The cert manager for HTTPS is injected through a web hook and also hosted " +
    "on GKE. The frontend and backend are separated and can both be individually scaled as well as providing further " +
    "redundancy. I have also previously created a native app for personal use with Vue and Tauri, as a JS frontend with a rust backend " +
    "which can be cross compiled to most platforms.",
    "Actix is a blazingly fast asynchronous rust web framework (to play buzzword bingo). It benchmarks as one of the " +
    "currently fastest and most stable web frameworks. Rusts strong typing, along with guaranteed guarantees from undefined behaviour and fearless" +
    "concurrency/parallelism make it a very solid candidate for backend technologies. The biggest draw-down" +
    "of rust currently is being a relatively young kid on the block, so the ecosystem is not fully fleshed out. " +
    "For this particular project the relatively lower integration with GCP means there might be reason" +
    "to also containerize Python with a separate API to use more stable client libraries. For any service we can run " +
    "directly on Kubernetes there are no particular limitations.",
    "GitHub workflows makes continuous integration and deployment a breeze. Managing the service on Kubernetes does " +
    "introduce some additional overhead in monitoring, however deployment and particularly being able to test newly " +
    "developed tools without the risk of breaking the system is a blessing. Being able to test a close to true " +
    "production environment locally can be a lifesaver. First testing is done on a local kubernetes instance. The system " +
    "is set up so that a GitHub workflow rebuilds the docker images on each new tagged commit (and not " +
    "otherwise). Kubernetes manifests are updated and applied to the cluster using kubectl. Kubernetes handles the rest, " +
    "including pulling images, deployment strategy, centralized logging and minimum availability. It is necessary, however, to " +
    "be mindful of following logs and health checks as deployment occurs and be mindful whether rollbacks are necessary.",
    "Working as a team, Adaptive built a rather substantial code base over the last six years. As a large portion was " +
    "spent working on the same projects, with a shared library and common elements across all facets of the business " +
    "having well established VCS workflow was crucial. The code base spanned data sourcing, ETL pipelines, databases, " +
    "research applications, research notebooks, simulations and stress tests, risk measures and portfolio structuring. " +
    "My primary focus in this was on risk simulations, research notebooks and portfolio structuring. Having founded " +
    "the company however I was involved in building a large portions of the foundation of strategic components. This included a VaR " +
    "(Value at Risk) and cVaR (conditional VaR) model, an options back-end featuring complex strategy construction with exotic contracts " +
    "as well as backtesting frameworks (programmatic) and a framework (conceptual, not programmatic) for statistical models. " +
    "Adaptive used a test-driven workflow for programmatic interfaces, and an interface-first approach for research models. " +
    "The former to put focus on correctness and the latter to prioritize re-usability. We also used strongly typed Python " +
    "to further enforce correctness."
]
const images = ["logo512.png", "./assets/actix.png", "./assets/CI_CD.png", "./assets/experience.png"]
const headerImage = ["./assets/frontend_chart.png", "./assets/backend_chart.png", "./assets/github_workflows.png", "./assets/experience_chart.png"]

function Cards() {
    return (
        <Row xs={1} md={2} className="g-4">
            {[0, 1, 2, 3].map((idx) => (
                <Col key={idx}>
                    <Card bg="dark" key={idx}>
                        <Card.Img variant="top" src={images[idx]}/>
                        <Card.Body>
                            <Card.Title>{titles[idx]}</Card.Title>
                            <Card.Text>
                                {texts[idx]}
                            </Card.Text>
                        </Card.Body>
                        <MuiDialog dialogTitle={dialogTitle[idx]} dialogText={dialogText[idx]}
                                   headerImage={headerImage[idx]}/>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Cards;
