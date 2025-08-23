import SocialLogin from './components/SocialLogin/SocialLogin';

function App() {
  const handleLogin = (email: string) => {
    console.log('Login attempt with email:', email);
    alert(`Login attempted with: ${email}`);
  };

  return (
    <SocialLogin onSubmit={handleLogin} />
  );
}

export default App;