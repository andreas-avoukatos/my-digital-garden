import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SiteUpdate: QuartzComponent = ({ allFiles, displayClass }: QuartzComponentProps) => {
  // Filter out files without dates, sort to find the newest modified date
  const sortedFiles = allFiles
    .filter((file) => file.dates?.modified)
    .sort((a, b) => b.dates!.modified!.getTime() - a.dates!.modified!.getTime())

  const latestFile = sortedFiles[0]
  const lastUpdated = latestFile?.dates?.modified

  if (lastUpdated) {
    return (
      <p class={classNames(displayClass, "site-update")} style={{ fontSize: "0.9rem", opacity: 0.7, margin: "0.5rem 0" }}>
        Site last updated: {lastUpdated.toLocaleDateString()}
      </p>
    )
  }

  return null
}

export default (() => SiteUpdate) satisfies QuartzComponentConstructor