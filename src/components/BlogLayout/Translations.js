import React from "react"
import { Link } from "gatsby"

import "../../fonts/fonts-post.css"
import Panel from "../Panel"
import { codeToLanguage } from "../../utils/i18n"

const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`

class Translations extends React.Component {
  render() {
    let { translations, lang, languageLink, editUrl } = this.props

    return (
      <div className="translations">
        <Panel style={{ fontFamily: systemFont }}>
          {translations.length > 0 && (
            <>
              <span>Translated by readers into: </span>
              {translations.map((l, i) => (
                <React.Fragment key={l}>
                  {l === lang ? (
                    <b>{codeToLanguage(l)}</b>
                  ) : (
                    <Link to={languageLink(l)}>{codeToLanguage(l)}</Link>
                  )}
                  {i === translations.length - 1 ? "" : " • "}
                </React.Fragment>
              ))}
            </>
          )}
          {lang !== "zh-hans" && (
            <>
              <br />
              <br />
              <Link to={languageLink("zh-hans")}>Read the original</Link>
              {" • "}
              <a href={editUrl} target="_blank" rel="noopener noreferrer">
                Improve this translation
              </a>
              {" • "}
              <Link to={`/${lang}`}>View all translated posts</Link>{" "}
            </>
          )}
        </Panel>
      </div>
    )
  }
}

export default Translations
