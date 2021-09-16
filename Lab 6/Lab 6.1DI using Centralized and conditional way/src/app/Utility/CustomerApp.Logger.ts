
export interface ILogger{
    Log():void;
}

export class BaseLogger implements ILogger
{
    Log(){

    }
} 

export class ConsoleLogger extends BaseLogger
{
    Log(){
        console.log('Using Console Logger ..');
    }
}

export class DBLogger extends BaseLogger
{
    Log(){
        console.log('Using Database Logger');
    }
}

export class FileLogger extends BaseLogger
{
    Log(){
        console.log('Using File Logger');
    }
}











