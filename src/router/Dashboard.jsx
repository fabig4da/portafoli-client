import React from 'react'
import { Link, Outlet} from 'react-router-dom';
import { CardTitle, Container, MainDash, Sider, SiderItem } from '../components/ui'


export const Dashboard = () => {
    return (
        <Container>
            <Sider>
                <SiderItem >
                    <i class="fab fa-buromobelexperte"></i>
                    <Link to='template' href="">Templates</Link>
                    <span></span>
                </SiderItem>
                <SiderItem >
                    <i class="fab fa-buromobelexperte"></i>
                    <Link to='works' href="">Works</Link>
                    <span></span>
                </SiderItem>
                <SiderItem >
                    <i class="fab fa-buromobelexperte"></i>
                    <Link to='tech' href="">Technologies</Link>
                    <span></span>
                </SiderItem>
            </Sider>
            <MainDash>
                <CardTitle>
                    <div className="c-title">
                        
                    </div>
                        
                    <Outlet />
                </CardTitle>
            </MainDash>
        </Container>
    )
}
