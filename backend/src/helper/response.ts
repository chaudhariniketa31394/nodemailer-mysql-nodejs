import {Request, response, Response} from 'express';

export function sendSuccess(request: Request,response: Response, Message = 'Request Successfull', data?:any) {

    response.send({ StatusCode: 200, IsRequestSuccessfull: true,Message:Message, Data:data })

}

export function sendError(request: Request, response :Response,errorCode:number,errorMgs:string) {

   // let Response = 
    response.status(400).send({IsRequestSuccessfull: false,errorMgs:errorMgs})

}
   

export function sendCreated(request: Request, response: Response, data:any) {
    let Response = { StatusCode: 201, IsRequestSuccessfull: true, Message:'Document Created Successfully', Data:data}
      response.send(Response)
}