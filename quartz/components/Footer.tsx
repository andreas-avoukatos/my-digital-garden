import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
  <footer class={`${displayClass ?? ""}`}>
    <hr />
    <p>
      {i18n(cfg.locale).components.footer.createdWith}{" "}
      <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
    </p>
    <ul>
      {Object.entries(links).map(([text, link]) => (
        <li>
          <a href={link}>{text}</a>
        </li>
      ))}
    </ul>
    
    {/* GoatCounter View Stats */}
    <div id="gc-stats"></div>
    <script dangerouslySetInnerHTML={{
      __html: `
        var t = setInterval(function() {
          if (window.goatcounter && window.goatcounter.visit_count) {
            clearInterval(t)
            window.goatcounter.visit_count({
              append: '#gc-stats',
              no_branding: true
            }) 
          }
        }, 100)
      `
    }}></script>
  </footer>
  )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
