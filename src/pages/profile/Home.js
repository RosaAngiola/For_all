import MainLayout from "@layouts/MainLayout";
import ButtonProfile from '@atoms/ButtonProfile';




export default function Home(){
    
    return(
        <MainLayout title = "Profile" >
            <div className="flex flex-col mt-16 gap-7">
            <ButtonProfile type ="box" to = '/profile/EditUserData'>Edit user Data</ButtonProfile>
            <ButtonProfile type ="box" to = '/profile/EditPassword'>Edit Password</ButtonProfile>
            <ButtonProfile type ="box" to = '/profile/Support'>Support</ButtonProfile>
            <ButtonProfile type ="box" to = '/profile/Faq' >F. A. Q.</ButtonProfile>
            <ButtonProfile type ="primary" to = '/'>Lgout</ButtonProfile>
            
            </div>
        </MainLayout>
    )
}