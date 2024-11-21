# host app
> acts as container for the micro FEs

# micro-fe-1
> micro fe sample that exposes components and to be imported by the host during runtime

# NOTE!
> micro FEs should be running for the host to be able to consume the exposed components from the micro FEs

# Module Federation
> Module Federation allows a JavaScript application to dynamically load code from another application and in the process, share dependencies. If an application consuming a federated module does not have a dependency needed by the federated code, Webpack will download the missing dependency from that federated build origin.

# Architecture
> The host app uses the components exposed by the micro-fe-1 as its own component.  
![alt text](micro_fe_module_federation_archi.drawio.svg "Title")

# References:
> - https://medium.com/@chirag.dave/a-complete-guide-to-react-micro-frontends-930229dc812a
> - https://blog.logrocket.com/build-micro-frontend-application-react/
> - https://dev.to/devsmitra/the-complete-guide-to-micro-frontend-with-reactjs-for-2022-36b2
> - https://www.youtube.com/watch?v=s_Fs4AXsTnA&t=130s