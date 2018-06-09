/* @noflow */

export type Action = {
  type: string,
}

export type Alert = {|
  isShow: boolean,
  title: string,
  text: string,
|}

export type PostItem = {|
  userId: number,
  id: number,
  title: string,
  body: string,
|}

export type Posts = Array<PostItem>
