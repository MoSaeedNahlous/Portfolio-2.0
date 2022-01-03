import classes from './about.module.css'
const About = () => {
    return (
        <div className={classes.main} id="about">
            <div className={ classes.titleContainer }>
                <h2><span className={ classes.titleSpan }>01.</span> About Me</h2>
            </div>
            <div className={ classes.descriptionContainer }>
                <p>
                    Hello!My name is Mohammad Saeed and I enjoy creating things that
                    live on the internet. My interest in web development started back in 2019
                    when me and friends decided to create a system for booking tickets for Syrian
                    soccer league, My role was creating the front end section with ReactJs!, 
                    It went amazingly and we get the first place with score of 95/100!
                </p>

                <p>
                    Fast-forward to today, and I've had the privillege of studying Master degree
                    in Web Science at Syrian Virtual University.
                </p> 

                <p>
                    Here are a few technologies I've been working with recently:
                </p>
                <div className={ classes.tecContainer }>
                    <div className={ classes.tecListContainer }>
                        <ul className={ classes.tecList }>
                            <li className={ classes.tecListItem }>
                                <svg className={ classes.tecListItemIcon } fill="#17c4a7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="16px" height="16px"><path d="M 51.4375 7.148438 C 51.179688 7.148438 50.925781 7.246094 50.730469 7.445313 C 50.335938 7.832031 50.335938 8.464844 50.730469 8.859375 L 52.140625 10.269531 C 52.335938 10.464844 52.59375 10.5625 52.847656 10.5625 C 53.105469 10.5625 53.363281 10.464844 53.558594 10.269531 C 53.949219 9.882813 53.949219 9.25 53.558594 8.859375 L 52.140625 7.445313 C 51.945313 7.246094 51.691406 7.148438 51.4375 7.148438 Z M 47.96875 10.613281 C 47.714844 10.613281 47.460938 10.710938 47.265625 10.90625 C 46.871094 11.300781 46.871094 11.929688 47.265625 12.324219 L 48.675781 13.734375 C 48.871094 13.929688 49.128906 14.03125 49.386719 14.03125 C 49.640625 14.03125 49.898438 13.929688 50.09375 13.734375 C 50.484375 13.34375 50.484375 12.714844 50.09375 12.324219 L 48.675781 10.90625 C 48.480469 10.710938 48.226563 10.613281 47.96875 10.613281 Z M 58 12 C 57.746094 12 57.488281 12.097656 57.292969 12.292969 L 24 45.585938 L 8.707031 30.292969 C 8.316406 29.902344 7.683594 29.902344 7.292969 30.292969 L 3.292969 34.292969 C 2.902344 34.683594 2.902344 35.316406 3.292969 35.707031 L 23.292969 55.707031 C 23.488281 55.902344 23.742188 56 24 56 C 24.257813 56 24.511719 55.902344 24.707031 55.707031 L 62.707031 17.707031 C 63.097656 17.316406 63.097656 16.683594 62.707031 16.292969 L 58.707031 12.292969 C 58.511719 12.097656 58.253906 12 58 12 Z M 44.4375 14.152344 C 44.179688 14.152344 43.925781 14.246094 43.730469 14.441406 C 43.335938 14.832031 43.335938 15.464844 43.730469 15.859375 L 45.140625 17.269531 C 45.335938 17.464844 45.59375 17.5625 45.847656 17.5625 C 46.105469 17.5625 46.363281 17.464844 46.558594 17.269531 C 46.949219 16.882813 46.949219 16.25 46.558594 15.859375 L 45.140625 14.441406 C 44.945313 14.246094 44.691406 14.152344 44.4375 14.152344 Z M 58 14.414063 L 60.585938 17 L 24 53.585938 L 5.414063 35 L 8 32.414063 L 23.292969 47.707031 C 23.683594 48.097656 24.316406 48.097656 24.707031 47.707031 Z M 40.898438 17.6875 C 40.644531 17.6875 40.386719 17.785156 40.191406 17.980469 C 39.800781 18.371094 39.800781 19.003906 40.191406 19.394531 L 41.605469 20.808594 C 41.800781 21.003906 42.054688 21.101563 42.3125 21.101563 C 42.570313 21.101563 42.824219 21.003906 43.019531 20.808594 C 43.410156 20.417969 43.410156 19.785156 43.019531 19.394531 L 41.605469 17.980469 C 41.410156 17.785156 41.152344 17.6875 40.898438 17.6875 Z M 37.363281 21.222656 C 37.105469 21.222656 36.851563 21.320313 36.65625 21.515625 C 36.265625 21.90625 36.265625 22.539063 36.65625 22.929688 L 38.070313 24.34375 C 38.265625 24.539063 38.519531 24.636719 38.777344 24.636719 C 39.035156 24.636719 39.289063 24.539063 39.484375 24.34375 C 39.875 23.953125 39.875 23.320313 39.484375 22.929688 L 38.070313 21.515625 C 37.875 21.320313 37.621094 21.222656 37.363281 21.222656 Z M 33.828125 24.757813 C 33.574219 24.757813 33.316406 24.855469 33.121094 25.050781 C 32.730469 25.441406 32.730469 26.074219 33.121094 26.464844 L 34.535156 27.878906 C 34.730469 28.074219 34.984375 28.171875 35.242188 28.171875 C 35.5 28.171875 35.753906 28.074219 35.949219 27.878906 C 36.339844 27.488281 36.339844 26.855469 35.949219 26.464844 L 34.535156 25.050781 C 34.339844 24.855469 34.082031 24.757813 33.828125 24.757813 Z M 30.292969 28.292969 C 30.039063 28.292969 29.78125 28.390625 29.585938 28.585938 C 29.195313 28.976563 29.195313 29.609375 29.585938 30 L 31 31.414063 C 31.195313 31.609375 31.449219 31.707031 31.707031 31.707031 C 31.964844 31.707031 32.21875 31.609375 32.414063 31.414063 C 32.804688 31.023438 32.804688 30.390625 32.414063 30 L 31 28.585938 C 30.804688 28.390625 30.546875 28.292969 30.292969 28.292969 Z M 26.757813 31.828125 C 26.503906 31.828125 26.246094 31.925781 26.050781 32.121094 C 25.660156 32.511719 25.660156 33.144531 26.050781 33.535156 L 27.464844 34.949219 C 27.660156 35.144531 27.914063 35.242188 28.171875 35.242188 C 28.429688 35.242188 28.683594 35.144531 28.878906 34.949219 C 29.269531 34.558594 29.269531 33.925781 28.878906 33.535156 L 27.464844 32.121094 C 27.269531 31.925781 27.011719 31.828125 26.757813 31.828125 Z M 23.21875 35.363281 C 22.964844 35.363281 22.707031 35.460938 22.515625 35.65625 C 22.121094 36.046875 22.121094 36.679688 22.515625 37.070313 L 23.929688 38.484375 C 24.125 38.679688 24.378906 38.777344 24.636719 38.777344 C 24.894531 38.777344 25.148438 38.679688 25.34375 38.484375 C 25.734375 38.09375 25.734375 37.460938 25.34375 37.070313 L 23.925781 35.65625 C 23.730469 35.460938 23.476563 35.363281 23.21875 35.363281 Z"/></svg>
                                JavaScript (ES6+)
                            </li>
                            <li className={ classes.tecListItem }>
                                <svg className={ classes.tecListItemIcon } fill="#17c4a7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="16px" height="16px"><path d="M 51.4375 7.148438 C 51.179688 7.148438 50.925781 7.246094 50.730469 7.445313 C 50.335938 7.832031 50.335938 8.464844 50.730469 8.859375 L 52.140625 10.269531 C 52.335938 10.464844 52.59375 10.5625 52.847656 10.5625 C 53.105469 10.5625 53.363281 10.464844 53.558594 10.269531 C 53.949219 9.882813 53.949219 9.25 53.558594 8.859375 L 52.140625 7.445313 C 51.945313 7.246094 51.691406 7.148438 51.4375 7.148438 Z M 47.96875 10.613281 C 47.714844 10.613281 47.460938 10.710938 47.265625 10.90625 C 46.871094 11.300781 46.871094 11.929688 47.265625 12.324219 L 48.675781 13.734375 C 48.871094 13.929688 49.128906 14.03125 49.386719 14.03125 C 49.640625 14.03125 49.898438 13.929688 50.09375 13.734375 C 50.484375 13.34375 50.484375 12.714844 50.09375 12.324219 L 48.675781 10.90625 C 48.480469 10.710938 48.226563 10.613281 47.96875 10.613281 Z M 58 12 C 57.746094 12 57.488281 12.097656 57.292969 12.292969 L 24 45.585938 L 8.707031 30.292969 C 8.316406 29.902344 7.683594 29.902344 7.292969 30.292969 L 3.292969 34.292969 C 2.902344 34.683594 2.902344 35.316406 3.292969 35.707031 L 23.292969 55.707031 C 23.488281 55.902344 23.742188 56 24 56 C 24.257813 56 24.511719 55.902344 24.707031 55.707031 L 62.707031 17.707031 C 63.097656 17.316406 63.097656 16.683594 62.707031 16.292969 L 58.707031 12.292969 C 58.511719 12.097656 58.253906 12 58 12 Z M 44.4375 14.152344 C 44.179688 14.152344 43.925781 14.246094 43.730469 14.441406 C 43.335938 14.832031 43.335938 15.464844 43.730469 15.859375 L 45.140625 17.269531 C 45.335938 17.464844 45.59375 17.5625 45.847656 17.5625 C 46.105469 17.5625 46.363281 17.464844 46.558594 17.269531 C 46.949219 16.882813 46.949219 16.25 46.558594 15.859375 L 45.140625 14.441406 C 44.945313 14.246094 44.691406 14.152344 44.4375 14.152344 Z M 58 14.414063 L 60.585938 17 L 24 53.585938 L 5.414063 35 L 8 32.414063 L 23.292969 47.707031 C 23.683594 48.097656 24.316406 48.097656 24.707031 47.707031 Z M 40.898438 17.6875 C 40.644531 17.6875 40.386719 17.785156 40.191406 17.980469 C 39.800781 18.371094 39.800781 19.003906 40.191406 19.394531 L 41.605469 20.808594 C 41.800781 21.003906 42.054688 21.101563 42.3125 21.101563 C 42.570313 21.101563 42.824219 21.003906 43.019531 20.808594 C 43.410156 20.417969 43.410156 19.785156 43.019531 19.394531 L 41.605469 17.980469 C 41.410156 17.785156 41.152344 17.6875 40.898438 17.6875 Z M 37.363281 21.222656 C 37.105469 21.222656 36.851563 21.320313 36.65625 21.515625 C 36.265625 21.90625 36.265625 22.539063 36.65625 22.929688 L 38.070313 24.34375 C 38.265625 24.539063 38.519531 24.636719 38.777344 24.636719 C 39.035156 24.636719 39.289063 24.539063 39.484375 24.34375 C 39.875 23.953125 39.875 23.320313 39.484375 22.929688 L 38.070313 21.515625 C 37.875 21.320313 37.621094 21.222656 37.363281 21.222656 Z M 33.828125 24.757813 C 33.574219 24.757813 33.316406 24.855469 33.121094 25.050781 C 32.730469 25.441406 32.730469 26.074219 33.121094 26.464844 L 34.535156 27.878906 C 34.730469 28.074219 34.984375 28.171875 35.242188 28.171875 C 35.5 28.171875 35.753906 28.074219 35.949219 27.878906 C 36.339844 27.488281 36.339844 26.855469 35.949219 26.464844 L 34.535156 25.050781 C 34.339844 24.855469 34.082031 24.757813 33.828125 24.757813 Z M 30.292969 28.292969 C 30.039063 28.292969 29.78125 28.390625 29.585938 28.585938 C 29.195313 28.976563 29.195313 29.609375 29.585938 30 L 31 31.414063 C 31.195313 31.609375 31.449219 31.707031 31.707031 31.707031 C 31.964844 31.707031 32.21875 31.609375 32.414063 31.414063 C 32.804688 31.023438 32.804688 30.390625 32.414063 30 L 31 28.585938 C 30.804688 28.390625 30.546875 28.292969 30.292969 28.292969 Z M 26.757813 31.828125 C 26.503906 31.828125 26.246094 31.925781 26.050781 32.121094 C 25.660156 32.511719 25.660156 33.144531 26.050781 33.535156 L 27.464844 34.949219 C 27.660156 35.144531 27.914063 35.242188 28.171875 35.242188 C 28.429688 35.242188 28.683594 35.144531 28.878906 34.949219 C 29.269531 34.558594 29.269531 33.925781 28.878906 33.535156 L 27.464844 32.121094 C 27.269531 31.925781 27.011719 31.828125 26.757813 31.828125 Z M 23.21875 35.363281 C 22.964844 35.363281 22.707031 35.460938 22.515625 35.65625 C 22.121094 36.046875 22.121094 36.679688 22.515625 37.070313 L 23.929688 38.484375 C 24.125 38.679688 24.378906 38.777344 24.636719 38.777344 C 24.894531 38.777344 25.148438 38.679688 25.34375 38.484375 C 25.734375 38.09375 25.734375 37.460938 25.34375 37.070313 L 23.925781 35.65625 C 23.730469 35.460938 23.476563 35.363281 23.21875 35.363281 Z"/></svg>
                                ReactJs
                            </li>
                            <li className={ classes.tecListItem }>
                                <svg className={ classes.tecListItemIcon } fill="#17c4a7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="16px" height="16px"><path d="M 51.4375 7.148438 C 51.179688 7.148438 50.925781 7.246094 50.730469 7.445313 C 50.335938 7.832031 50.335938 8.464844 50.730469 8.859375 L 52.140625 10.269531 C 52.335938 10.464844 52.59375 10.5625 52.847656 10.5625 C 53.105469 10.5625 53.363281 10.464844 53.558594 10.269531 C 53.949219 9.882813 53.949219 9.25 53.558594 8.859375 L 52.140625 7.445313 C 51.945313 7.246094 51.691406 7.148438 51.4375 7.148438 Z M 47.96875 10.613281 C 47.714844 10.613281 47.460938 10.710938 47.265625 10.90625 C 46.871094 11.300781 46.871094 11.929688 47.265625 12.324219 L 48.675781 13.734375 C 48.871094 13.929688 49.128906 14.03125 49.386719 14.03125 C 49.640625 14.03125 49.898438 13.929688 50.09375 13.734375 C 50.484375 13.34375 50.484375 12.714844 50.09375 12.324219 L 48.675781 10.90625 C 48.480469 10.710938 48.226563 10.613281 47.96875 10.613281 Z M 58 12 C 57.746094 12 57.488281 12.097656 57.292969 12.292969 L 24 45.585938 L 8.707031 30.292969 C 8.316406 29.902344 7.683594 29.902344 7.292969 30.292969 L 3.292969 34.292969 C 2.902344 34.683594 2.902344 35.316406 3.292969 35.707031 L 23.292969 55.707031 C 23.488281 55.902344 23.742188 56 24 56 C 24.257813 56 24.511719 55.902344 24.707031 55.707031 L 62.707031 17.707031 C 63.097656 17.316406 63.097656 16.683594 62.707031 16.292969 L 58.707031 12.292969 C 58.511719 12.097656 58.253906 12 58 12 Z M 44.4375 14.152344 C 44.179688 14.152344 43.925781 14.246094 43.730469 14.441406 C 43.335938 14.832031 43.335938 15.464844 43.730469 15.859375 L 45.140625 17.269531 C 45.335938 17.464844 45.59375 17.5625 45.847656 17.5625 C 46.105469 17.5625 46.363281 17.464844 46.558594 17.269531 C 46.949219 16.882813 46.949219 16.25 46.558594 15.859375 L 45.140625 14.441406 C 44.945313 14.246094 44.691406 14.152344 44.4375 14.152344 Z M 58 14.414063 L 60.585938 17 L 24 53.585938 L 5.414063 35 L 8 32.414063 L 23.292969 47.707031 C 23.683594 48.097656 24.316406 48.097656 24.707031 47.707031 Z M 40.898438 17.6875 C 40.644531 17.6875 40.386719 17.785156 40.191406 17.980469 C 39.800781 18.371094 39.800781 19.003906 40.191406 19.394531 L 41.605469 20.808594 C 41.800781 21.003906 42.054688 21.101563 42.3125 21.101563 C 42.570313 21.101563 42.824219 21.003906 43.019531 20.808594 C 43.410156 20.417969 43.410156 19.785156 43.019531 19.394531 L 41.605469 17.980469 C 41.410156 17.785156 41.152344 17.6875 40.898438 17.6875 Z M 37.363281 21.222656 C 37.105469 21.222656 36.851563 21.320313 36.65625 21.515625 C 36.265625 21.90625 36.265625 22.539063 36.65625 22.929688 L 38.070313 24.34375 C 38.265625 24.539063 38.519531 24.636719 38.777344 24.636719 C 39.035156 24.636719 39.289063 24.539063 39.484375 24.34375 C 39.875 23.953125 39.875 23.320313 39.484375 22.929688 L 38.070313 21.515625 C 37.875 21.320313 37.621094 21.222656 37.363281 21.222656 Z M 33.828125 24.757813 C 33.574219 24.757813 33.316406 24.855469 33.121094 25.050781 C 32.730469 25.441406 32.730469 26.074219 33.121094 26.464844 L 34.535156 27.878906 C 34.730469 28.074219 34.984375 28.171875 35.242188 28.171875 C 35.5 28.171875 35.753906 28.074219 35.949219 27.878906 C 36.339844 27.488281 36.339844 26.855469 35.949219 26.464844 L 34.535156 25.050781 C 34.339844 24.855469 34.082031 24.757813 33.828125 24.757813 Z M 30.292969 28.292969 C 30.039063 28.292969 29.78125 28.390625 29.585938 28.585938 C 29.195313 28.976563 29.195313 29.609375 29.585938 30 L 31 31.414063 C 31.195313 31.609375 31.449219 31.707031 31.707031 31.707031 C 31.964844 31.707031 32.21875 31.609375 32.414063 31.414063 C 32.804688 31.023438 32.804688 30.390625 32.414063 30 L 31 28.585938 C 30.804688 28.390625 30.546875 28.292969 30.292969 28.292969 Z M 26.757813 31.828125 C 26.503906 31.828125 26.246094 31.925781 26.050781 32.121094 C 25.660156 32.511719 25.660156 33.144531 26.050781 33.535156 L 27.464844 34.949219 C 27.660156 35.144531 27.914063 35.242188 28.171875 35.242188 C 28.429688 35.242188 28.683594 35.144531 28.878906 34.949219 C 29.269531 34.558594 29.269531 33.925781 28.878906 33.535156 L 27.464844 32.121094 C 27.269531 31.925781 27.011719 31.828125 26.757813 31.828125 Z M 23.21875 35.363281 C 22.964844 35.363281 22.707031 35.460938 22.515625 35.65625 C 22.121094 36.046875 22.121094 36.679688 22.515625 37.070313 L 23.929688 38.484375 C 24.125 38.679688 24.378906 38.777344 24.636719 38.777344 C 24.894531 38.777344 25.148438 38.679688 25.34375 38.484375 C 25.734375 38.09375 25.734375 37.460938 25.34375 37.070313 L 23.925781 35.65625 C 23.730469 35.460938 23.476563 35.363281 23.21875 35.363281 Z"/></svg>
                                NextJs
                            </li>
                        </ul>
                    </div>
                    <div className={ classes.tecListContainer }>
                        <ul className={ classes.tecList }>
                            <li className={ classes.tecListItem }>
                                <svg className={ classes.tecListItemIcon } fill="#17c4a7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="16px" height="16px"><path d="M 51.4375 7.148438 C 51.179688 7.148438 50.925781 7.246094 50.730469 7.445313 C 50.335938 7.832031 50.335938 8.464844 50.730469 8.859375 L 52.140625 10.269531 C 52.335938 10.464844 52.59375 10.5625 52.847656 10.5625 C 53.105469 10.5625 53.363281 10.464844 53.558594 10.269531 C 53.949219 9.882813 53.949219 9.25 53.558594 8.859375 L 52.140625 7.445313 C 51.945313 7.246094 51.691406 7.148438 51.4375 7.148438 Z M 47.96875 10.613281 C 47.714844 10.613281 47.460938 10.710938 47.265625 10.90625 C 46.871094 11.300781 46.871094 11.929688 47.265625 12.324219 L 48.675781 13.734375 C 48.871094 13.929688 49.128906 14.03125 49.386719 14.03125 C 49.640625 14.03125 49.898438 13.929688 50.09375 13.734375 C 50.484375 13.34375 50.484375 12.714844 50.09375 12.324219 L 48.675781 10.90625 C 48.480469 10.710938 48.226563 10.613281 47.96875 10.613281 Z M 58 12 C 57.746094 12 57.488281 12.097656 57.292969 12.292969 L 24 45.585938 L 8.707031 30.292969 C 8.316406 29.902344 7.683594 29.902344 7.292969 30.292969 L 3.292969 34.292969 C 2.902344 34.683594 2.902344 35.316406 3.292969 35.707031 L 23.292969 55.707031 C 23.488281 55.902344 23.742188 56 24 56 C 24.257813 56 24.511719 55.902344 24.707031 55.707031 L 62.707031 17.707031 C 63.097656 17.316406 63.097656 16.683594 62.707031 16.292969 L 58.707031 12.292969 C 58.511719 12.097656 58.253906 12 58 12 Z M 44.4375 14.152344 C 44.179688 14.152344 43.925781 14.246094 43.730469 14.441406 C 43.335938 14.832031 43.335938 15.464844 43.730469 15.859375 L 45.140625 17.269531 C 45.335938 17.464844 45.59375 17.5625 45.847656 17.5625 C 46.105469 17.5625 46.363281 17.464844 46.558594 17.269531 C 46.949219 16.882813 46.949219 16.25 46.558594 15.859375 L 45.140625 14.441406 C 44.945313 14.246094 44.691406 14.152344 44.4375 14.152344 Z M 58 14.414063 L 60.585938 17 L 24 53.585938 L 5.414063 35 L 8 32.414063 L 23.292969 47.707031 C 23.683594 48.097656 24.316406 48.097656 24.707031 47.707031 Z M 40.898438 17.6875 C 40.644531 17.6875 40.386719 17.785156 40.191406 17.980469 C 39.800781 18.371094 39.800781 19.003906 40.191406 19.394531 L 41.605469 20.808594 C 41.800781 21.003906 42.054688 21.101563 42.3125 21.101563 C 42.570313 21.101563 42.824219 21.003906 43.019531 20.808594 C 43.410156 20.417969 43.410156 19.785156 43.019531 19.394531 L 41.605469 17.980469 C 41.410156 17.785156 41.152344 17.6875 40.898438 17.6875 Z M 37.363281 21.222656 C 37.105469 21.222656 36.851563 21.320313 36.65625 21.515625 C 36.265625 21.90625 36.265625 22.539063 36.65625 22.929688 L 38.070313 24.34375 C 38.265625 24.539063 38.519531 24.636719 38.777344 24.636719 C 39.035156 24.636719 39.289063 24.539063 39.484375 24.34375 C 39.875 23.953125 39.875 23.320313 39.484375 22.929688 L 38.070313 21.515625 C 37.875 21.320313 37.621094 21.222656 37.363281 21.222656 Z M 33.828125 24.757813 C 33.574219 24.757813 33.316406 24.855469 33.121094 25.050781 C 32.730469 25.441406 32.730469 26.074219 33.121094 26.464844 L 34.535156 27.878906 C 34.730469 28.074219 34.984375 28.171875 35.242188 28.171875 C 35.5 28.171875 35.753906 28.074219 35.949219 27.878906 C 36.339844 27.488281 36.339844 26.855469 35.949219 26.464844 L 34.535156 25.050781 C 34.339844 24.855469 34.082031 24.757813 33.828125 24.757813 Z M 30.292969 28.292969 C 30.039063 28.292969 29.78125 28.390625 29.585938 28.585938 C 29.195313 28.976563 29.195313 29.609375 29.585938 30 L 31 31.414063 C 31.195313 31.609375 31.449219 31.707031 31.707031 31.707031 C 31.964844 31.707031 32.21875 31.609375 32.414063 31.414063 C 32.804688 31.023438 32.804688 30.390625 32.414063 30 L 31 28.585938 C 30.804688 28.390625 30.546875 28.292969 30.292969 28.292969 Z M 26.757813 31.828125 C 26.503906 31.828125 26.246094 31.925781 26.050781 32.121094 C 25.660156 32.511719 25.660156 33.144531 26.050781 33.535156 L 27.464844 34.949219 C 27.660156 35.144531 27.914063 35.242188 28.171875 35.242188 C 28.429688 35.242188 28.683594 35.144531 28.878906 34.949219 C 29.269531 34.558594 29.269531 33.925781 28.878906 33.535156 L 27.464844 32.121094 C 27.269531 31.925781 27.011719 31.828125 26.757813 31.828125 Z M 23.21875 35.363281 C 22.964844 35.363281 22.707031 35.460938 22.515625 35.65625 C 22.121094 36.046875 22.121094 36.679688 22.515625 37.070313 L 23.929688 38.484375 C 24.125 38.679688 24.378906 38.777344 24.636719 38.777344 C 24.894531 38.777344 25.148438 38.679688 25.34375 38.484375 C 25.734375 38.09375 25.734375 37.460938 25.34375 37.070313 L 23.925781 35.65625 C 23.730469 35.460938 23.476563 35.363281 23.21875 35.363281 Z"/></svg>
                                NodeJs
                            </li>
                            <li className={ classes.tecListItem }>
                                <svg className={ classes.tecListItemIcon } fill="#17c4a7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="16px" height="16px"><path d="M 51.4375 7.148438 C 51.179688 7.148438 50.925781 7.246094 50.730469 7.445313 C 50.335938 7.832031 50.335938 8.464844 50.730469 8.859375 L 52.140625 10.269531 C 52.335938 10.464844 52.59375 10.5625 52.847656 10.5625 C 53.105469 10.5625 53.363281 10.464844 53.558594 10.269531 C 53.949219 9.882813 53.949219 9.25 53.558594 8.859375 L 52.140625 7.445313 C 51.945313 7.246094 51.691406 7.148438 51.4375 7.148438 Z M 47.96875 10.613281 C 47.714844 10.613281 47.460938 10.710938 47.265625 10.90625 C 46.871094 11.300781 46.871094 11.929688 47.265625 12.324219 L 48.675781 13.734375 C 48.871094 13.929688 49.128906 14.03125 49.386719 14.03125 C 49.640625 14.03125 49.898438 13.929688 50.09375 13.734375 C 50.484375 13.34375 50.484375 12.714844 50.09375 12.324219 L 48.675781 10.90625 C 48.480469 10.710938 48.226563 10.613281 47.96875 10.613281 Z M 58 12 C 57.746094 12 57.488281 12.097656 57.292969 12.292969 L 24 45.585938 L 8.707031 30.292969 C 8.316406 29.902344 7.683594 29.902344 7.292969 30.292969 L 3.292969 34.292969 C 2.902344 34.683594 2.902344 35.316406 3.292969 35.707031 L 23.292969 55.707031 C 23.488281 55.902344 23.742188 56 24 56 C 24.257813 56 24.511719 55.902344 24.707031 55.707031 L 62.707031 17.707031 C 63.097656 17.316406 63.097656 16.683594 62.707031 16.292969 L 58.707031 12.292969 C 58.511719 12.097656 58.253906 12 58 12 Z M 44.4375 14.152344 C 44.179688 14.152344 43.925781 14.246094 43.730469 14.441406 C 43.335938 14.832031 43.335938 15.464844 43.730469 15.859375 L 45.140625 17.269531 C 45.335938 17.464844 45.59375 17.5625 45.847656 17.5625 C 46.105469 17.5625 46.363281 17.464844 46.558594 17.269531 C 46.949219 16.882813 46.949219 16.25 46.558594 15.859375 L 45.140625 14.441406 C 44.945313 14.246094 44.691406 14.152344 44.4375 14.152344 Z M 58 14.414063 L 60.585938 17 L 24 53.585938 L 5.414063 35 L 8 32.414063 L 23.292969 47.707031 C 23.683594 48.097656 24.316406 48.097656 24.707031 47.707031 Z M 40.898438 17.6875 C 40.644531 17.6875 40.386719 17.785156 40.191406 17.980469 C 39.800781 18.371094 39.800781 19.003906 40.191406 19.394531 L 41.605469 20.808594 C 41.800781 21.003906 42.054688 21.101563 42.3125 21.101563 C 42.570313 21.101563 42.824219 21.003906 43.019531 20.808594 C 43.410156 20.417969 43.410156 19.785156 43.019531 19.394531 L 41.605469 17.980469 C 41.410156 17.785156 41.152344 17.6875 40.898438 17.6875 Z M 37.363281 21.222656 C 37.105469 21.222656 36.851563 21.320313 36.65625 21.515625 C 36.265625 21.90625 36.265625 22.539063 36.65625 22.929688 L 38.070313 24.34375 C 38.265625 24.539063 38.519531 24.636719 38.777344 24.636719 C 39.035156 24.636719 39.289063 24.539063 39.484375 24.34375 C 39.875 23.953125 39.875 23.320313 39.484375 22.929688 L 38.070313 21.515625 C 37.875 21.320313 37.621094 21.222656 37.363281 21.222656 Z M 33.828125 24.757813 C 33.574219 24.757813 33.316406 24.855469 33.121094 25.050781 C 32.730469 25.441406 32.730469 26.074219 33.121094 26.464844 L 34.535156 27.878906 C 34.730469 28.074219 34.984375 28.171875 35.242188 28.171875 C 35.5 28.171875 35.753906 28.074219 35.949219 27.878906 C 36.339844 27.488281 36.339844 26.855469 35.949219 26.464844 L 34.535156 25.050781 C 34.339844 24.855469 34.082031 24.757813 33.828125 24.757813 Z M 30.292969 28.292969 C 30.039063 28.292969 29.78125 28.390625 29.585938 28.585938 C 29.195313 28.976563 29.195313 29.609375 29.585938 30 L 31 31.414063 C 31.195313 31.609375 31.449219 31.707031 31.707031 31.707031 C 31.964844 31.707031 32.21875 31.609375 32.414063 31.414063 C 32.804688 31.023438 32.804688 30.390625 32.414063 30 L 31 28.585938 C 30.804688 28.390625 30.546875 28.292969 30.292969 28.292969 Z M 26.757813 31.828125 C 26.503906 31.828125 26.246094 31.925781 26.050781 32.121094 C 25.660156 32.511719 25.660156 33.144531 26.050781 33.535156 L 27.464844 34.949219 C 27.660156 35.144531 27.914063 35.242188 28.171875 35.242188 C 28.429688 35.242188 28.683594 35.144531 28.878906 34.949219 C 29.269531 34.558594 29.269531 33.925781 28.878906 33.535156 L 27.464844 32.121094 C 27.269531 31.925781 27.011719 31.828125 26.757813 31.828125 Z M 23.21875 35.363281 C 22.964844 35.363281 22.707031 35.460938 22.515625 35.65625 C 22.121094 36.046875 22.121094 36.679688 22.515625 37.070313 L 23.929688 38.484375 C 24.125 38.679688 24.378906 38.777344 24.636719 38.777344 C 24.894531 38.777344 25.148438 38.679688 25.34375 38.484375 C 25.734375 38.09375 25.734375 37.460938 25.34375 37.070313 L 23.925781 35.65625 C 23.730469 35.460938 23.476563 35.363281 23.21875 35.363281 Z"/></svg>
                                ExpressJs
                            </li>
                            <li className={ classes.tecListItem }>
                                <svg className={ classes.tecListItemIcon } fill="#17c4a7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="16px" height="16px"><path d="M 51.4375 7.148438 C 51.179688 7.148438 50.925781 7.246094 50.730469 7.445313 C 50.335938 7.832031 50.335938 8.464844 50.730469 8.859375 L 52.140625 10.269531 C 52.335938 10.464844 52.59375 10.5625 52.847656 10.5625 C 53.105469 10.5625 53.363281 10.464844 53.558594 10.269531 C 53.949219 9.882813 53.949219 9.25 53.558594 8.859375 L 52.140625 7.445313 C 51.945313 7.246094 51.691406 7.148438 51.4375 7.148438 Z M 47.96875 10.613281 C 47.714844 10.613281 47.460938 10.710938 47.265625 10.90625 C 46.871094 11.300781 46.871094 11.929688 47.265625 12.324219 L 48.675781 13.734375 C 48.871094 13.929688 49.128906 14.03125 49.386719 14.03125 C 49.640625 14.03125 49.898438 13.929688 50.09375 13.734375 C 50.484375 13.34375 50.484375 12.714844 50.09375 12.324219 L 48.675781 10.90625 C 48.480469 10.710938 48.226563 10.613281 47.96875 10.613281 Z M 58 12 C 57.746094 12 57.488281 12.097656 57.292969 12.292969 L 24 45.585938 L 8.707031 30.292969 C 8.316406 29.902344 7.683594 29.902344 7.292969 30.292969 L 3.292969 34.292969 C 2.902344 34.683594 2.902344 35.316406 3.292969 35.707031 L 23.292969 55.707031 C 23.488281 55.902344 23.742188 56 24 56 C 24.257813 56 24.511719 55.902344 24.707031 55.707031 L 62.707031 17.707031 C 63.097656 17.316406 63.097656 16.683594 62.707031 16.292969 L 58.707031 12.292969 C 58.511719 12.097656 58.253906 12 58 12 Z M 44.4375 14.152344 C 44.179688 14.152344 43.925781 14.246094 43.730469 14.441406 C 43.335938 14.832031 43.335938 15.464844 43.730469 15.859375 L 45.140625 17.269531 C 45.335938 17.464844 45.59375 17.5625 45.847656 17.5625 C 46.105469 17.5625 46.363281 17.464844 46.558594 17.269531 C 46.949219 16.882813 46.949219 16.25 46.558594 15.859375 L 45.140625 14.441406 C 44.945313 14.246094 44.691406 14.152344 44.4375 14.152344 Z M 58 14.414063 L 60.585938 17 L 24 53.585938 L 5.414063 35 L 8 32.414063 L 23.292969 47.707031 C 23.683594 48.097656 24.316406 48.097656 24.707031 47.707031 Z M 40.898438 17.6875 C 40.644531 17.6875 40.386719 17.785156 40.191406 17.980469 C 39.800781 18.371094 39.800781 19.003906 40.191406 19.394531 L 41.605469 20.808594 C 41.800781 21.003906 42.054688 21.101563 42.3125 21.101563 C 42.570313 21.101563 42.824219 21.003906 43.019531 20.808594 C 43.410156 20.417969 43.410156 19.785156 43.019531 19.394531 L 41.605469 17.980469 C 41.410156 17.785156 41.152344 17.6875 40.898438 17.6875 Z M 37.363281 21.222656 C 37.105469 21.222656 36.851563 21.320313 36.65625 21.515625 C 36.265625 21.90625 36.265625 22.539063 36.65625 22.929688 L 38.070313 24.34375 C 38.265625 24.539063 38.519531 24.636719 38.777344 24.636719 C 39.035156 24.636719 39.289063 24.539063 39.484375 24.34375 C 39.875 23.953125 39.875 23.320313 39.484375 22.929688 L 38.070313 21.515625 C 37.875 21.320313 37.621094 21.222656 37.363281 21.222656 Z M 33.828125 24.757813 C 33.574219 24.757813 33.316406 24.855469 33.121094 25.050781 C 32.730469 25.441406 32.730469 26.074219 33.121094 26.464844 L 34.535156 27.878906 C 34.730469 28.074219 34.984375 28.171875 35.242188 28.171875 C 35.5 28.171875 35.753906 28.074219 35.949219 27.878906 C 36.339844 27.488281 36.339844 26.855469 35.949219 26.464844 L 34.535156 25.050781 C 34.339844 24.855469 34.082031 24.757813 33.828125 24.757813 Z M 30.292969 28.292969 C 30.039063 28.292969 29.78125 28.390625 29.585938 28.585938 C 29.195313 28.976563 29.195313 29.609375 29.585938 30 L 31 31.414063 C 31.195313 31.609375 31.449219 31.707031 31.707031 31.707031 C 31.964844 31.707031 32.21875 31.609375 32.414063 31.414063 C 32.804688 31.023438 32.804688 30.390625 32.414063 30 L 31 28.585938 C 30.804688 28.390625 30.546875 28.292969 30.292969 28.292969 Z M 26.757813 31.828125 C 26.503906 31.828125 26.246094 31.925781 26.050781 32.121094 C 25.660156 32.511719 25.660156 33.144531 26.050781 33.535156 L 27.464844 34.949219 C 27.660156 35.144531 27.914063 35.242188 28.171875 35.242188 C 28.429688 35.242188 28.683594 35.144531 28.878906 34.949219 C 29.269531 34.558594 29.269531 33.925781 28.878906 33.535156 L 27.464844 32.121094 C 27.269531 31.925781 27.011719 31.828125 26.757813 31.828125 Z M 23.21875 35.363281 C 22.964844 35.363281 22.707031 35.460938 22.515625 35.65625 C 22.121094 36.046875 22.121094 36.679688 22.515625 37.070313 L 23.929688 38.484375 C 24.125 38.679688 24.378906 38.777344 24.636719 38.777344 C 24.894531 38.777344 25.148438 38.679688 25.34375 38.484375 C 25.734375 38.09375 25.734375 37.460938 25.34375 37.070313 L 23.925781 35.65625 C 23.730469 35.460938 23.476563 35.363281 23.21875 35.363281 Z"/></svg>
                                MongoDB
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About