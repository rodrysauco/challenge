export interface CongressMember{
    id:string;
    first_name:string;
    last_name:string;
    title:string;
    gender:string;
    party:string;
    current_party?:string
    date_of_birth?:string;
    most_recent_vote?:string;
    twitter_account?:string;
    facebook_account:string;
    url?:string;
}