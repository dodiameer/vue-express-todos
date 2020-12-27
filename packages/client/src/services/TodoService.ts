/* eslint-disable no-unused-vars */
import IService from "./IService";
import { ITodo } from "@vue-express-todos/common"

export default class TodoService implements IService<ITodo> {
  static endpoint = "http://localhost:3001/api/todos"
  async GetOne(id: string | undefined): Promise<ITodo> {
    const res = await fetch(`${TodoService.endpoint}/${id}`)
    return res.json()
  }
  async GetAll(): Promise<ITodo[]> {
    const res = await fetch(TodoService.endpoint)
    return res.json()
  }
  async CreateNew(data: ITodo): Promise<ITodo> {
    const res = await fetch(TodoService.endpoint, { body: JSON.stringify(data), method: "POST" })
    return res.json()
  }
  async Update(id: string | undefined, newData: ITodo): Promise<ITodo> {
    const res = await fetch(`${TodoService.endpoint}/${id}`, { body: JSON.stringify(newData), method: "PUT" })
    return res.json()
  }
  async Delete(id: string | undefined): Promise<void> {
    await fetch(`${TodoService.endpoint}/${id}`, { method: "DELETE" })
  }

}