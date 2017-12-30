import * as React from "react";
import Document, {DocumentProps} from 'next/document'

export interface Context {
  pathname: string;
  query: string;
  asPath: string;
  req: {locale: string, localeDataScript: string, messages: object, antdLocale: object};
  res?: object;
}


export class Page extends React.Component<DocumentProps> {
  static getInitialProps(context: Context): any
}
