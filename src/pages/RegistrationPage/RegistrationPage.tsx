import React, { FunctionComponent, useState } from "react";


// export interface RegistrationPageProps {
    
// }
 
const RegistrationPage: FunctionComponent = () => {
    const [step, setStep] = useState(1)
    

    return (
        <div>
            {step === 1 
                }
        </div>
        // <Switch>
        //                         <Route path='/register/:id' component={RegistrationPage} />

        // </Switch>
        // <RegisterForm/>
     );
}
 
export default RegistrationPage;