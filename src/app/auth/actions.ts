import { revalidatePath } from "next/cache";
import { z } from "zod";
import { Axios } from "axios";

export async function initateSignin(prevState: any, formData: FormData) {
    const schema = z.object({
        USERNAME: z.string().nonempty(),
        AuthFlow: z.string(),
        ClientId: z.string(),
    })
    let data = schema.parse({
        USERNAME: formData.get("email"),
        AuthFlow: "CUSTOM_AUTH",
        ClientId: "6f650t9nnimeuu1ke0v383c43t"
    })

    const request = new Axios({
        method: "post",
        url: 'https://cognito-idp.eu-central-1.amazonaws.com/',
        headers: { 
          'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth', 
          'Content-Type': 'application/x-amz-json-1.1'
        },
        data: data
    })
}



