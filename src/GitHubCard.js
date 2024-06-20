import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className="card-pic" variant="top" src="/Andrew Acin.jpg" />
            <Card.Body>
                <Card.Title>Andrew Acin</Card.Title>
                <Card.Text>
                    Software Developer Student, just trying to make it.
                </Card.Text>
                <Card.Link href="https://github.com/Andrew-Acin">
                <Button variant="primary">GitHub</Button>
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default GitHubCard;