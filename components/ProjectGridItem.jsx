import classes from './projectGridItem.module.css'
import Link from 'next/link'
const ProjectGridItem = (props) => {
    const { url,title,tags,projectUrl } = props.project
    return (
        <div className={classes.main}>
            <div className={ classes.head }>
                <span title={projectUrl && 'Go to GitHub repo'}>
                    <Link href={projectUrl && projectUrl}>
                        <a target='_blank'>
                            <svg fill="#17c4a7" className={ classes.icon } xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M 5 4 C 3.347656 4 2 5.347656 2 7 L 2 47 C 2 48.652344 3.347656 50 5 50 L 24 50 L 24 52 L 16.660156 52 C 15.320313 52 14.070313 52.519531 13.121094 53.460938 L 8 58.589844 C 7.429688 59.160156 7.261719 60.019531 7.570313 60.769531 C 7.878906 61.519531 8.601563 62 9.410156 62 L 54.589844 62 C 55.398438 62 56.121094 61.519531 56.429688 60.769531 C 56.738281 60.019531 56.570313 59.160156 56 58.589844 L 50.878906 53.460938 C 49.929688 52.519531 48.679688 52 47.339844 52 L 40 52 L 40 50 L 59 50 C 60.652344 50 62 48.652344 62 47 L 62 7 C 62 5.347656 60.652344 4 59 4 Z M 5 6 L 59 6 C 59.550781 6 60 6.449219 60 7 L 60 47 C 60 47.550781 59.550781 48 59 48 L 5 48 C 4.449219 48 4 47.550781 4 47 L 4 7 C 4 6.449219 4.449219 6 5 6 Z M 9 10 C 8.449219 10 8 10.445313 8 11 L 8 43 C 8 43.554688 8.449219 44 9 44 L 55 44 C 55.550781 44 56 43.554688 56 43 L 56 11 C 56 10.445313 55.550781 10 55 10 Z M 10 12 L 54 12 L 54 42 L 10 42 Z M 24 16 C 23.746094 16 23.488281 16.097656 23.292969 16.292969 L 15.292969 24.292969 C 14.902344 24.683594 14.902344 25.316406 15.292969 25.707031 L 23.292969 33.707031 C 23.488281 33.902344 23.742188 34 24 34 C 24.257813 34 24.511719 33.902344 24.707031 33.707031 C 25.097656 33.316406 25.097656 32.683594 24.707031 32.292969 L 17.414063 25 L 24.707031 17.707031 C 25.097656 17.316406 25.097656 16.683594 24.707031 16.292969 C 24.511719 16.097656 24.253906 16 24 16 Z M 40 16 C 39.746094 16 39.488281 16.097656 39.292969 16.292969 C 38.902344 16.683594 38.902344 17.316406 39.292969 17.707031 L 46.585938 25 L 39.292969 32.292969 C 38.902344 32.683594 38.902344 33.316406 39.292969 33.707031 C 39.488281 33.902344 39.742188 34 40 34 C 40.257813 34 40.511719 33.902344 40.707031 33.707031 L 48.707031 25.707031 C 49.097656 25.316406 49.097656 24.683594 48.707031 24.292969 L 40.707031 16.292969 C 40.511719 16.097656 40.253906 16 40 16 Z M 12 36 C 11.449219 36 11 36.445313 11 37 L 11 39 C 11 39.554688 11.449219 40 12 40 C 12.550781 40 13 39.554688 13 39 L 13 37 C 13 36.445313 12.550781 36 12 36 Z M 17 36 C 16.449219 36 16 36.445313 16 37 L 16 39 C 16 39.554688 16.449219 40 17 40 C 17.550781 40 18 39.554688 18 39 L 18 37 C 18 36.445313 17.550781 36 17 36 Z M 22 36 C 21.449219 36 21 36.445313 21 37 L 21 39 C 21 39.554688 21.449219 40 22 40 C 22.550781 40 23 39.554688 23 39 L 23 37 C 23 36.445313 22.550781 36 22 36 Z M 27 36 C 26.449219 36 26 36.445313 26 37 L 26 39 C 26 39.554688 26.449219 40 27 40 C 27.550781 40 28 39.554688 28 39 L 28 37 C 28 36.445313 27.550781 36 27 36 Z M 32 36 C 31.449219 36 31 36.445313 31 37 L 31 39 C 31 39.554688 31.449219 40 32 40 C 32.550781 40 33 39.554688 33 39 L 33 37 C 33 36.445313 32.550781 36 32 36 Z M 37 36 C 36.449219 36 36 36.445313 36 37 L 36 39 C 36 39.554688 36.449219 40 37 40 C 37.550781 40 38 39.554688 38 39 L 38 37 C 38 36.445313 37.550781 36 37 36 Z M 42 36 C 41.449219 36 41 36.445313 41 37 L 41 39 C 41 39.554688 41.449219 40 42 40 C 42.550781 40 43 39.554688 43 39 L 43 37 C 43 36.445313 42.550781 36 42 36 Z M 47 36 C 46.449219 36 46 36.445313 46 37 L 46 39 C 46 39.554688 46.449219 40 47 40 C 47.550781 40 48 39.554688 48 39 L 48 37 C 48 36.445313 47.550781 36 47 36 Z M 52 36 C 51.449219 36 51 36.445313 51 37 L 51 39 C 51 39.554688 51.449219 40 52 40 C 52.550781 40 53 39.554688 53 39 L 53 37 C 53 36.445313 52.550781 36 52 36 Z M 26 50 L 38 50 L 38 56 L 26 56 Z M 16.660156 54 L 24 54 L 24 56 C 24 57.101563 24.898438 58 26 58 L 38 58 C 39.101563 58 40 57.101563 40 56 L 40 54 L 47.339844 54 C 48.128906 54 48.910156 54.320313 49.460938 54.878906 L 54.589844 60 L 9.410156 60 L 14.539063 54.878906 C 15.089844 54.320313 15.871094 54 16.660156 54 Z"/></svg>
                        </a>
                    </Link>
                </span>
                <span title='Go to GitHub repo'>
                    <Link href={url}>
                        <a target='_blank'>
                            <svg fill="#17c4a7" className={ classes.link } xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M 47.585938 -0.140625 C 47.035156 -0.140625 46.585938 0.304688 46.585938 0.859375 L 46.585938 6.515625 C 46.585938 7.066406 47.035156 7.515625 47.585938 7.515625 L 50.828125 7.515625 L 48.34375 10 L 9 10 C 7.347656 10 6 11.347656 6 13 L 6 55 C 6 56.652344 7.347656 58 9 58 L 51 58 C 52.652344 58 54 56.652344 54 55 L 54 15.65625 L 56.484375 13.171875 L 56.484375 16.414063 C 56.484375 16.964844 56.929688 17.414063 57.484375 17.414063 L 63.140625 17.414063 C 63.417969 17.414063 63.667969 17.300781 63.847656 17.121094 C 64.03125 16.941406 64.140625 16.691406 64.140625 16.414063 L 64.140625 0.859375 C 64.140625 0.304688 63.695313 -0.140625 63.140625 -0.140625 Z M 48.585938 1.859375 L 62.140625 1.859375 L 62.140625 15.414063 L 58.484375 15.414063 L 58.484375 10.757813 C 58.484375 10.351563 58.242188 9.988281 57.867188 9.832031 C 57.492188 9.675781 57.0625 9.765625 56.777344 10.050781 L 32.980469 33.847656 L 30.152344 31.019531 L 53.949219 7.222656 C 54.234375 6.9375 54.320313 6.507813 54.167969 6.132813 C 54.011719 5.757813 53.648438 5.515625 53.242188 5.515625 L 48.585938 5.515625 Z M 9 12 L 46.34375 12 L 28.03125 30.3125 C 27.636719 30.703125 27.636719 31.339844 28.03125 31.730469 L 32.269531 35.96875 C 32.664063 36.363281 33.296875 36.363281 33.6875 35.96875 L 52 17.65625 L 52 55 C 52 55.550781 51.550781 56 51 56 L 9 56 C 8.449219 56 8 55.550781 8 55 L 8 13 C 8 12.449219 8.449219 12 9 12 Z M 10 50 C 9.449219 50 9 50.449219 9 51 L 9 53 C 9 53.550781 9.449219 54 10 54 C 10.550781 54 11 53.550781 11 53 L 11 51 C 11 50.449219 10.550781 50 10 50 Z M 15 50 C 14.449219 50 14 50.449219 14 51 L 14 53 C 14 53.550781 14.449219 54 15 54 C 15.550781 54 16 53.550781 16 53 L 16 51 C 16 50.449219 15.550781 50 15 50 Z M 20 50 C 19.449219 50 19 50.449219 19 51 L 19 53 C 19 53.550781 19.449219 54 20 54 C 20.550781 54 21 53.550781 21 53 L 21 51 C 21 50.449219 20.550781 50 20 50 Z M 25 50 C 24.449219 50 24 50.449219 24 51 L 24 53 C 24 53.550781 24.449219 54 25 54 C 25.550781 54 26 53.550781 26 53 L 26 51 C 26 50.449219 25.550781 50 25 50 Z M 30 50 C 29.449219 50 29 50.449219 29 51 L 29 53 C 29 53.550781 29.449219 54 30 54 C 30.550781 54 31 53.550781 31 53 L 31 51 C 31 50.449219 30.550781 50 30 50 Z M 35 50 C 34.449219 50 34 50.449219 34 51 L 34 53 C 34 53.550781 34.449219 54 35 54 C 35.550781 54 36 53.550781 36 53 L 36 51 C 36 50.449219 35.550781 50 35 50 Z M 40 50 C 39.449219 50 39 50.449219 39 51 L 39 53 C 39 53.550781 39.449219 54 40 54 C 40.550781 54 41 53.550781 41 53 L 41 51 C 41 50.449219 40.550781 50 40 50 Z M 45 50 C 44.449219 50 44 50.449219 44 51 L 44 53 C 44 53.550781 44.449219 54 45 54 C 45.550781 54 46 53.550781 46 53 L 46 51 C 46 50.449219 45.550781 50 45 50 Z M 50 50 C 49.449219 50 49 50.449219 49 51 L 49 53 C 49 53.550781 49.449219 54 50 54 C 50.550781 54 51 53.550781 51 53 L 51 51 C 51 50.449219 50.550781 50 50 50 Z"/></svg>
                        </a>
                    </Link>
                </span>

            </div>
            <div className={ classes.body }>
                <div className={ classes.title }>
                    {title}
                </div>
                <div className={ classes.description }>
                    {description}
                </div>
            </div>
            <div className={ classes.tail }>
                { tags.map(tag => (
                    <div className={ classes.tag } key={tag}>{ tag }</div>
                ))}
            </div>
        </div>
    )
}

export default ProjectGridItem
