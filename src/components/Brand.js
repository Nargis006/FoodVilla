import { branding } from "../common/config";

export default Brand = function(){
    return (<>{branding.logo  && <img src={branding.logo} alt="loading..." className="logo"/>}
    {!branding.logo && <h2>{branding.title}</h2>}
    </>);
}