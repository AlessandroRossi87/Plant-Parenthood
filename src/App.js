import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PlantCreateForm from "./pages/plants/PlantCreateForm";
import PlantPage from "./pages/plants/PlantPage";
import PlantsPage from "./pages/plants/PlantsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id ||  "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={() => (
            <PlantsPage message="No plants found. Adjust the search keyword" />
            )}
          />
          <Route 
            exact 
            path="/feed" 
            render={() => (
              <PlantsPage 
                message="No plants found. Adjust the search keyword or follow a user"
                filter={`owner__followed__owner__profile=${profile_id}&`} 
              />
            )}
          />
          <Route 
            exact 
            path="/reactions" 
            render={() => (
              <PlantsPage 
                message="No plants found. Adjust the search keyword or react to a plant"
                filter={`reactions__owner__profile=${profile_id}&ordering=-reactions__created_at&`} 
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/plants/create" render={() => <PlantCreateForm />} />
          <Route exact path="/plants/:id" render={() => <PlantPage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;