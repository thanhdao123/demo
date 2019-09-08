pipeline {
    agent any

    stages {
        stage('Build Images') {
            steps {
                sh "docker build -t daongocthanh/demo-web:latest -t daongocthanh/demo-web:${GIT_COMMIT} -f ./web/Dockerfile ./web"
                sh "docker build -t daongocthanh/demo-server:latest -t daongocthanh/demo-server-rest:${GIT_COMMIT} -f ./server-rest/Dockerfile ./server-rest"
            }
        }
        stage('Example Test') {
            steps {
                echo 'Hello, JDK 123'
            }
        }
    }
}